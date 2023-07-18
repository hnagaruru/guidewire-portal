package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPMoneySecCovCost.eti;BOPMoneySecCovCost.eix;BOPMoneySecCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPMoneySecCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPMoneySecCovCostVersionList {
  public BOPMoneySecCovCostVersionListImpl(entity.BOPMoneySecCovCost base)  {
    super(base);
  }
  
  public BOPMoneySecCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPMoneySecCovCost AsOf(java.util.Date date) {
    return (entity.BOPMoneySecCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPMoneySecCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BOPTransaction bean) {
    addToArray(entity.BOPMoneySecCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPMoneySecCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BOPMoneySecCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}