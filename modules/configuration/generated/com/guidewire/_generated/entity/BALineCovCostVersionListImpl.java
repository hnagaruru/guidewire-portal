package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BALineCovCost.eti;BALineCovCost.eix;BALineCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BALineCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BALineCovCostVersionList {
  public BALineCovCostVersionListImpl(entity.BALineCovCost base)  {
    super(base);
  }
  
  public BALineCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BALineCovCost AsOf(java.util.Date date) {
    return (entity.BALineCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BALineCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BATransaction bean) {
    addToArray(entity.BALineCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BALineCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BALineCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}