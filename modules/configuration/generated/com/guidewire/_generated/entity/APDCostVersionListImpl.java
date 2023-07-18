package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDCost.eti;APDCost.eix;APDCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class APDCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.APDCostVersionList {
  public APDCostVersionListImpl(entity.APDCost base)  {
    super(base);
  }
  
  public APDCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.APDCost AsOf(java.util.Date date) {
    return (entity.APDCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.APDCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.APDTransaction bean) {
    addToArray(entity.APDCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.APDCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.APDTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.APDCost.TRANSACTIONS_PROP.get());
  }
  
  
}