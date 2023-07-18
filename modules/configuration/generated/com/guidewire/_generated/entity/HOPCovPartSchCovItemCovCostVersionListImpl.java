package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCovPartSchCovItemCovCost.eti;HOPCovPartSchCovItemCovCost.eix;HOPCovPartSchCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCovPartSchCovItemCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCovPartSchCovItemCovCostVersionList {
  public HOPCovPartSchCovItemCovCostVersionListImpl(entity.HOPCovPartSchCovItemCovCost base)  {
    super(base);
  }
  
  public HOPCovPartSchCovItemCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCovPartSchCovItemCovCost AsOf(java.util.Date date) {
    return (entity.HOPCovPartSchCovItemCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCovPartSchCovItemCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.HOPTransaction bean) {
    addToArray(entity.HOPCovPartSchCovItemCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCovPartSchCovItemCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.HOPCovPartSchCovItemCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}