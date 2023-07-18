package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateCovVehiclePIPCost.eti;BAStateCovVehiclePIPCost.eix;BAStateCovVehiclePIPCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAStateCovVehiclePIPCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAStateCovVehiclePIPCostVersionList {
  public BAStateCovVehiclePIPCostVersionListImpl(entity.BAStateCovVehiclePIPCost base)  {
    super(base);
  }
  
  public BAStateCovVehiclePIPCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAStateCovVehiclePIPCost AsOf(java.util.Date date) {
    return (entity.BAStateCovVehiclePIPCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAStateCovVehiclePIPCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BATransaction bean) {
    addToArray(entity.BAStateCovVehiclePIPCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAStateCovVehiclePIPCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BAStateCovVehiclePIPCost.TRANSACTIONS_PROP.get());
  }
  
  
}