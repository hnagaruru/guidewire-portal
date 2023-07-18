package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPCost.eti;CPCost.eix;CPCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPCostVersionList {
  public CPCostVersionListImpl(entity.CPCost base)  {
    super(base);
  }
  
  public CPCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPCost AsOf(java.util.Date date) {
    return (entity.CPCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.CPTransaction bean) {
    addToArray(entity.CPCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.CPCost.TRANSACTIONS_PROP.get());
  }
  
  
}