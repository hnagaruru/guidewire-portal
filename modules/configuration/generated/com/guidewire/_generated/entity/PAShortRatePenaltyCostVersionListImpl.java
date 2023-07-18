package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAShortRatePenaltyCost.eti;PAShortRatePenaltyCost.eix;PAShortRatePenaltyCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PAShortRatePenaltyCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PAShortRatePenaltyCostVersionList {
  public PAShortRatePenaltyCostVersionListImpl(entity.PAShortRatePenaltyCost base)  {
    super(base);
  }
  
  public PAShortRatePenaltyCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PAShortRatePenaltyCost AsOf(java.util.Date date) {
    return (entity.PAShortRatePenaltyCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PAShortRatePenaltyCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.PATransaction bean) {
    addToArray(entity.PAShortRatePenaltyCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAShortRatePenaltyCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.PAShortRatePenaltyCost.TRANSACTIONS_PROP.get());
  }
  
  
}