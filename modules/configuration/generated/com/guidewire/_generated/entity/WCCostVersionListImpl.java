package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCost.eti;WCCost.eix;WCCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCCostVersionList {
  public WCCostVersionListImpl(entity.WCCost base)  {
    super(base);
  }
  
  public WCCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCCost AsOf(java.util.Date date) {
    return (entity.WCCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.WCTransaction bean) {
    addToArray(entity.WCCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.WCCost.TRANSACTIONS_PROP.get());
  }
  
  
}