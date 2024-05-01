/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  EndpointV2Contract,
  EndpointV2_ComposeDeliveredEntity,
  EndpointV2_ComposeSentEntity,
  EndpointV2_DefaultReceiveLibrarySetEntity,
  EndpointV2_DefaultReceiveLibraryTimeoutSetEntity,
  EndpointV2_DefaultSendLibrarySetEntity,
  EndpointV2_DelegateSetEntity,
  EndpointV2_InboundNonceSkippedEntity,
  EndpointV2_LibraryRegisteredEntity,
  EndpointV2_LzComposeAlertEntity,
  EndpointV2_LzReceiveAlertEntity,
  EndpointV2_LzTokenSetEntity,
  EndpointV2_OwnershipTransferredEntity,
  EndpointV2_PacketBurntEntity,
  EndpointV2_PacketDeliveredEntity,
  EndpointV2_PacketNilifiedEntity,
  EndpointV2_PacketSentEntity,
  EndpointV2_PacketVerifiedEntity,
  EndpointV2_ReceiveLibrarySetEntity,
  EndpointV2_ReceiveLibraryTimeoutSetEntity,
  EndpointV2_SendLibrarySetEntity,
} from "generated";

export const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

EndpointV2Contract.ComposeDelivered.loader(({ event, context }) => {});

EndpointV2Contract.ComposeDelivered.handler(({ event, context }) => {
  const endpointV2_ComposeDeliveredEntity: EndpointV2_ComposeDeliveredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    from: event.params.from,
    to: event.params.to,
    guid: event.params.guid,
    index: event.params.index,
  };

  context.EndpointV2_ComposeDelivered.set(endpointV2_ComposeDeliveredEntity);
});
EndpointV2Contract.ComposeSent.loader(({ event, context }) => {});

EndpointV2Contract.ComposeSent.handler(({ event, context }) => {
  const endpointV2_ComposeSentEntity: EndpointV2_ComposeSentEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    from: event.params.from,
    to: event.params.to,
    guid: event.params.guid,
    index: event.params.index,
    message: event.params.message,
  };

  context.EndpointV2_ComposeSent.set(endpointV2_ComposeSentEntity);
});
EndpointV2Contract.DefaultReceiveLibrarySet.loader(({ event, context }) => {});

EndpointV2Contract.DefaultReceiveLibrarySet.handler(({ event, context }) => {
  const endpointV2_DefaultReceiveLibrarySetEntity: EndpointV2_DefaultReceiveLibrarySetEntity =
    {
      id: event.transactionHash + event.logIndex.toString(),
      eid: event.params.eid,
      newLib: event.params.newLib,
    };

  context.EndpointV2_DefaultReceiveLibrarySet.set(
    endpointV2_DefaultReceiveLibrarySetEntity
  );
});
EndpointV2Contract.DefaultReceiveLibraryTimeoutSet.loader(
  ({ event, context }) => {}
);

EndpointV2Contract.DefaultReceiveLibraryTimeoutSet.handler(
  ({ event, context }) => {
    const endpointV2_DefaultReceiveLibraryTimeoutSetEntity: EndpointV2_DefaultReceiveLibraryTimeoutSetEntity =
      {
        id: event.transactionHash + event.logIndex.toString(),
        eid: event.params.eid,
        oldLib: event.params.oldLib,
        expiry: event.params.expiry,
      };

    context.EndpointV2_DefaultReceiveLibraryTimeoutSet.set(
      endpointV2_DefaultReceiveLibraryTimeoutSetEntity
    );
  }
);
EndpointV2Contract.DefaultSendLibrarySet.loader(({ event, context }) => {});

EndpointV2Contract.DefaultSendLibrarySet.handler(({ event, context }) => {
  const endpointV2_DefaultSendLibrarySetEntity: EndpointV2_DefaultSendLibrarySetEntity =
    {
      id: event.transactionHash + event.logIndex.toString(),
      eid: event.params.eid,
      newLib: event.params.newLib,
    };

  context.EndpointV2_DefaultSendLibrarySet.set(
    endpointV2_DefaultSendLibrarySetEntity
  );
});
EndpointV2Contract.DelegateSet.loader(({ event, context }) => {});

EndpointV2Contract.DelegateSet.handler(({ event, context }) => {
  const endpointV2_DelegateSetEntity: EndpointV2_DelegateSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    sender: event.params.sender,
    delegate: event.params.delegate,
  };

  context.EndpointV2_DelegateSet.set(endpointV2_DelegateSetEntity);
});
EndpointV2Contract.InboundNonceSkipped.loader(({ event, context }) => {});

EndpointV2Contract.InboundNonceSkipped.handler(({ event, context }) => {
  const endpointV2_InboundNonceSkippedEntity: EndpointV2_InboundNonceSkippedEntity =
    {
      id: event.transactionHash + event.logIndex.toString(),
      srcEid: event.params.srcEid,
      sender: event.params.sender,
      receiver: event.params.receiver,
      nonce: event.params.nonce,
    };

  context.EndpointV2_InboundNonceSkipped.set(
    endpointV2_InboundNonceSkippedEntity
  );
});
EndpointV2Contract.LibraryRegistered.loader(({ event, context }) => {});

EndpointV2Contract.LibraryRegistered.handler(({ event, context }) => {
  const endpointV2_LibraryRegisteredEntity: EndpointV2_LibraryRegisteredEntity =
    {
      id: event.transactionHash + event.logIndex.toString(),
      newLib: event.params.newLib,
    };

  context.EndpointV2_LibraryRegistered.set(endpointV2_LibraryRegisteredEntity);
});
EndpointV2Contract.LzComposeAlert.loader(({ event, context }) => {});

EndpointV2Contract.LzComposeAlert.handler(({ event, context }) => {
  const endpointV2_LzComposeAlertEntity: EndpointV2_LzComposeAlertEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    from: event.params.from,
    to: event.params.to,
    executor: event.params.executor,
    guid: event.params.guid,
    index: event.params.index,
    gas: event.params.gas,
    value: event.params.value,
    message: event.params.message,
    extraData: event.params.extraData,
    reason: event.params.reason,
  };

  context.EndpointV2_LzComposeAlert.set(endpointV2_LzComposeAlertEntity);
});
EndpointV2Contract.LzReceiveAlert.loader(({ event, context }) => {});

EndpointV2Contract.LzReceiveAlert.handler(({ event, context }) => {
  const endpointV2_LzReceiveAlertEntity: EndpointV2_LzReceiveAlertEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    receiver: event.params.receiver,
    executor: event.params.executor,
    origin_0: event.params.origin[0],
    origin_1: event.params.origin[1],
    origin_2: event.params.origin[2],
    guid: event.params.guid,
    gas: event.params.gas,
    value: event.params.value,
    message: event.params.message,
    extraData: event.params.extraData,
    reason: event.params.reason,
  };

  context.EndpointV2_LzReceiveAlert.set(endpointV2_LzReceiveAlertEntity);
});
EndpointV2Contract.LzTokenSet.loader(({ event, context }) => {});

EndpointV2Contract.LzTokenSet.handler(({ event, context }) => {
  const endpointV2_LzTokenSetEntity: EndpointV2_LzTokenSetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    token: event.params.token,
  };

  context.EndpointV2_LzTokenSet.set(endpointV2_LzTokenSetEntity);
});
EndpointV2Contract.OwnershipTransferred.loader(({ event, context }) => {});

EndpointV2Contract.OwnershipTransferred.handler(({ event, context }) => {
  const endpointV2_OwnershipTransferredEntity: EndpointV2_OwnershipTransferredEntity =
    {
      id: event.transactionHash + event.logIndex.toString(),
      previousOwner: event.params.previousOwner,
      newOwner: event.params.newOwner,
    };

  context.EndpointV2_OwnershipTransferred.set(
    endpointV2_OwnershipTransferredEntity
  );
});
EndpointV2Contract.PacketBurnt.loader(({ event, context }) => {});

EndpointV2Contract.PacketBurnt.handler(({ event, context }) => {
  const endpointV2_PacketBurntEntity: EndpointV2_PacketBurntEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    srcEid: event.params.srcEid,
    sender: event.params.sender,
    receiver: event.params.receiver,
    nonce: event.params.nonce,
    payloadHash: event.params.payloadHash,
  };

  context.EndpointV2_PacketBurnt.set(endpointV2_PacketBurntEntity);
});
EndpointV2Contract.PacketDelivered.loader(({ event, context }) => {});

EndpointV2Contract.PacketDelivered.handler(({ event, context }) => {
  const endpointV2_PacketDeliveredEntity: EndpointV2_PacketDeliveredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    origin_0: event.params.origin[0],
    origin_1: event.params.origin[1],
    origin_2: event.params.origin[2],
    receiver: event.params.receiver,
  };

  context.EndpointV2_PacketDelivered.set(endpointV2_PacketDeliveredEntity);
});
EndpointV2Contract.PacketNilified.loader(({ event, context }) => {});

EndpointV2Contract.PacketNilified.handler(({ event, context }) => {
  const endpointV2_PacketNilifiedEntity: EndpointV2_PacketNilifiedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    srcEid: event.params.srcEid,
    sender: event.params.sender,
    receiver: event.params.receiver,
    nonce: event.params.nonce,
    payloadHash: event.params.payloadHash,
  };

  context.EndpointV2_PacketNilified.set(endpointV2_PacketNilifiedEntity);
});
EndpointV2Contract.PacketSent.loader(({ event, context }) => {});

EndpointV2Contract.PacketSent.handler(({ event, context }) => {
  const endpointV2_PacketSentEntity: EndpointV2_PacketSentEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    encodedPayload: event.params.encodedPayload,
    options: event.params.options,
    sendLibrary: event.params.sendLibrary,
  };

  context.EndpointV2_PacketSent.set(endpointV2_PacketSentEntity);
});
EndpointV2Contract.PacketVerified.loader(({ event, context }) => {});

EndpointV2Contract.PacketVerified.handler(({ event, context }) => {
  const endpointV2_PacketVerifiedEntity: EndpointV2_PacketVerifiedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    origin_0: event.params.origin[0],
    origin_1: event.params.origin[1],
    origin_2: event.params.origin[2],
    receiver: event.params.receiver,
    payloadHash: event.params.payloadHash,
  };

  context.EndpointV2_PacketVerified.set(endpointV2_PacketVerifiedEntity);
});
EndpointV2Contract.ReceiveLibrarySet.loader(({ event, context }) => {});

EndpointV2Contract.ReceiveLibrarySet.handler(({ event, context }) => {
  const endpointV2_ReceiveLibrarySetEntity: EndpointV2_ReceiveLibrarySetEntity =
    {
      id: event.transactionHash + event.logIndex.toString(),
      receiver: event.params.receiver,
      eid: event.params.eid,
      newLib: event.params.newLib,
    };

  context.EndpointV2_ReceiveLibrarySet.set(endpointV2_ReceiveLibrarySetEntity);
});
EndpointV2Contract.ReceiveLibraryTimeoutSet.loader(({ event, context }) => {});

EndpointV2Contract.ReceiveLibraryTimeoutSet.handler(({ event, context }) => {
  const endpointV2_ReceiveLibraryTimeoutSetEntity: EndpointV2_ReceiveLibraryTimeoutSetEntity =
    {
      id: event.transactionHash + event.logIndex.toString(),
      receiver: event.params.receiver,
      eid: event.params.eid,
      oldLib: event.params.oldLib,
      timeout: event.params.timeout,
    };

  context.EndpointV2_ReceiveLibraryTimeoutSet.set(
    endpointV2_ReceiveLibraryTimeoutSetEntity
  );
});
EndpointV2Contract.SendLibrarySet.loader(({ event, context }) => {});

EndpointV2Contract.SendLibrarySet.handler(({ event, context }) => {
  const endpointV2_SendLibrarySetEntity: EndpointV2_SendLibrarySetEntity = {
    id: event.transactionHash + event.logIndex.toString(),
    sender: event.params.sender,
    eid: event.params.eid,
    newLib: event.params.newLib,
  };

  context.EndpointV2_SendLibrarySet.set(endpointV2_SendLibrarySetEntity);
});
