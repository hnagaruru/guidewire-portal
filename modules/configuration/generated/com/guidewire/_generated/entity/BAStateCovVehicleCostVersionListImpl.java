package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateCovVehicleCost.eti;BAStateCovVehicleCost.eix;BAStateCovVehicleCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAStateCovVehicleCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAStateCovVehicleCostVersionList {
  public BAStateCovVehicleCostVersionListImpl(entity.BAStateCovVehicleCost base)  {
    super(base);
  }
  
  public BAStateCovVehicleCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAStateCovVehicleCost AsOf(java.util.Date date) {
    return (entity.BAStateCovVehicleCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAStateCovVehicleCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BATransaction bean) {
    addToArray(entity.BAStateCovVehicleCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateCovVehicleCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BAStateCovVehicleCost.TRANSACTIONS_PROP.get());
  }
  
  
}