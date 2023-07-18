package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicleCovCost.eti;BusinessVehicleCovCost.eix;BusinessVehicleCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BusinessVehicleCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BusinessVehicleCovCostVersionList {
  public BusinessVehicleCovCostVersionListImpl(entity.BusinessVehicleCovCost base)  {
    super(base);
  }
  
  public BusinessVehicleCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BusinessVehicleCovCost AsOf(java.util.Date date) {
    return (entity.BusinessVehicleCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BusinessVehicleCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BATransaction bean) {
    addToArray(entity.BusinessVehicleCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BusinessVehicleCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BusinessVehicleCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}