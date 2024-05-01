import assert from "assert";
import { 
  TestHelpers,
  EventsSummaryEntity,
  EndpointV2_ComposeDeliveredEntity
} from "generated";
const { MockDb, EndpointV2, Addresses } = TestHelpers;

import { GLOBAL_EVENTS_SUMMARY_KEY } from "../src/EventHandlers";


const MOCK_EVENTS_SUMMARY_ENTITY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
  endpointV2_ComposeDeliveredCount: BigInt(0),
  endpointV2_ComposeSentCount: BigInt(0),
  endpointV2_DefaultReceiveLibrarySetCount: BigInt(0),
  endpointV2_DefaultReceiveLibraryTimeoutSetCount: BigInt(0),
  endpointV2_DefaultSendLibrarySetCount: BigInt(0),
  endpointV2_DelegateSetCount: BigInt(0),
  endpointV2_InboundNonceSkippedCount: BigInt(0),
  endpointV2_LibraryRegisteredCount: BigInt(0),
  endpointV2_LzComposeAlertCount: BigInt(0),
  endpointV2_LzReceiveAlertCount: BigInt(0),
  endpointV2_LzTokenSetCount: BigInt(0),
  endpointV2_OwnershipTransferredCount: BigInt(0),
  endpointV2_PacketBurntCount: BigInt(0),
  endpointV2_PacketDeliveredCount: BigInt(0),
  endpointV2_PacketNilifiedCount: BigInt(0),
  endpointV2_PacketSentCount: BigInt(0),
  endpointV2_PacketVerifiedCount: BigInt(0),
  endpointV2_ReceiveLibrarySetCount: BigInt(0),
  endpointV2_ReceiveLibraryTimeoutSetCount: BigInt(0),
  endpointV2_SendLibrarySetCount: BigInt(0),
};

describe("EndpointV2 contract ComposeDelivered event tests", () => {
  // Create mock db
  const mockDbInitial = MockDb.createMockDb();

  // Add mock EventsSummaryEntity to mock db
  const mockDbFinal = mockDbInitial.entities.EventsSummary.set(
    MOCK_EVENTS_SUMMARY_ENTITY
  );

  // Creating mock EndpointV2 contract ComposeDelivered event
  const mockEndpointV2ComposeDeliveredEvent = EndpointV2.ComposeDelivered.createMockEvent({
    from: Addresses.defaultAddress,
    to: Addresses.defaultAddress,
    guid: "foo",
    index: 0n,
    mockEventData: {
      chainId: 1,
      blockNumber: 0,
      blockTimestamp: 0,
      blockHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      srcAddress: Addresses.defaultAddress,
      transactionHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      transactionIndex: 0,
      logIndex: 0,
    },
  });

  // Processing the event
  const mockDbUpdated = EndpointV2.ComposeDelivered.processEvent({
    event: mockEndpointV2ComposeDeliveredEvent,
    mockDb: mockDbFinal,
  });

  it("EndpointV2_ComposeDeliveredEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualEndpointV2ComposeDeliveredEntity = mockDbUpdated.entities.EndpointV2_ComposeDelivered.get(
      mockEndpointV2ComposeDeliveredEvent.transactionHash +
        mockEndpointV2ComposeDeliveredEvent.logIndex.toString()
    );

    // Creating the expected entity
    const expectedEndpointV2ComposeDeliveredEntity: EndpointV2_ComposeDeliveredEntity = {
      id:
        mockEndpointV2ComposeDeliveredEvent.transactionHash +
        mockEndpointV2ComposeDeliveredEvent.logIndex.toString(),
      from: mockEndpointV2ComposeDeliveredEvent.params.from,
      to: mockEndpointV2ComposeDeliveredEvent.params.to,
      guid: mockEndpointV2ComposeDeliveredEvent.params.guid,
      index: mockEndpointV2ComposeDeliveredEvent.params.index,
      eventsSummary: "GlobalEventsSummary",
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEndpointV2ComposeDeliveredEntity, expectedEndpointV2ComposeDeliveredEntity, "Actual EndpointV2ComposeDeliveredEntity should be the same as the expectedEndpointV2ComposeDeliveredEntity");
  });

  it("EventsSummaryEntity is updated correctly", () => {
    // Getting the actual entity from the mock database
    let actualEventsSummaryEntity = mockDbUpdated.entities.EventsSummary.get(
      GLOBAL_EVENTS_SUMMARY_KEY
    );

    // Creating the expected entity
    const expectedEventsSummaryEntity: EventsSummaryEntity = {
      ...MOCK_EVENTS_SUMMARY_ENTITY,
      endpointV2_ComposeDeliveredCount: MOCK_EVENTS_SUMMARY_ENTITY.endpointV2_ComposeDeliveredCount + BigInt(1),
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEventsSummaryEntity, expectedEventsSummaryEntity, "Actual EndpointV2ComposeDeliveredEntity should be the same as the expectedEndpointV2ComposeDeliveredEntity");
  });
});
