package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartCovCost.eti;IMAccountsRecPartCovCost.eix;IMAccountsRecPartCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMAccountsRecPartCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMAccountsRecPartCovCostVersionList {
  public IMAccountsRecPartCovCostVersionListImpl(entity.IMAccountsRecPartCovCost base)  {
    super(base);
  }
  
  public IMAccountsRecPartCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMAccountsRecPartCovCost AsOf(java.util.Date date) {
    return (entity.IMAccountsRecPartCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecPartCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.IMTransaction bean) {
    addToArray(entity.IMAccountsRecPartCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.IMAccountsRecPartCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}