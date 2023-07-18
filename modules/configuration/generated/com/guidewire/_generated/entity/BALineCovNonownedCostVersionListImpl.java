package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BALineCovNonownedCost.eti;BALineCovNonownedCost.eix;BALineCovNonownedCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BALineCovNonownedCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BALineCovNonownedCostVersionList {
  public BALineCovNonownedCostVersionListImpl(entity.BALineCovNonownedCost base)  {
    super(base);
  }
  
  public BALineCovNonownedCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BALineCovNonownedCost AsOf(java.util.Date date) {
    return (entity.BALineCovNonownedCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BALineCovNonownedCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BATransaction bean) {
    addToArray(entity.BALineCovNonownedCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BALineCovNonownedCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BALineCovNonownedCost.TRANSACTIONS_PROP.get());
  }
  
  
}