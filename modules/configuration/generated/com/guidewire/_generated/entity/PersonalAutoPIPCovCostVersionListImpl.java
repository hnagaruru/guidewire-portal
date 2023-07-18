package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoPIPCovCost.eti;PersonalAutoPIPCovCost.eix;PersonalAutoPIPCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalAutoPIPCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalAutoPIPCovCostVersionList {
  public PersonalAutoPIPCovCostVersionListImpl(entity.PersonalAutoPIPCovCost base)  {
    super(base);
  }
  
  public PersonalAutoPIPCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PersonalAutoPIPCovCost AsOf(java.util.Date date) {
    return (entity.PersonalAutoPIPCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoPIPCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.PATransaction bean) {
    addToArray(entity.PersonalAutoPIPCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoPIPCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.PersonalAutoPIPCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}