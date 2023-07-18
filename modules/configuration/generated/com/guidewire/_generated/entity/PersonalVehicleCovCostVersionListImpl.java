package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalVehicleCovCost.eti;PersonalVehicleCovCost.eix;PersonalVehicleCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalVehicleCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalVehicleCovCostVersionList {
  public PersonalVehicleCovCostVersionListImpl(entity.PersonalVehicleCovCost base)  {
    super(base);
  }
  
  public PersonalVehicleCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PersonalVehicleCovCost AsOf(java.util.Date date) {
    return (entity.PersonalVehicleCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalVehicleCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.PATransaction bean) {
    addToArray(entity.PersonalVehicleCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalVehicleCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.PersonalVehicleCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}