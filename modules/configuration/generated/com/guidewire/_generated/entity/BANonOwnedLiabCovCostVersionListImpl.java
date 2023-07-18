package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BANonOwnedLiabCovCost.eti;BANonOwnedLiabCovCost.eix;BANonOwnedLiabCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BANonOwnedLiabCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BANonOwnedLiabCovCostVersionList {
  public BANonOwnedLiabCovCostVersionListImpl(entity.BANonOwnedLiabCovCost base)  {
    super(base);
  }
  
  public BANonOwnedLiabCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BANonOwnedLiabCovCost AsOf(java.util.Date date) {
    return (entity.BANonOwnedLiabCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BANonOwnedLiabCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BATransaction bean) {
    addToArray(entity.BANonOwnedLiabCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BANonOwnedLiabCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BANonOwnedLiabCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}