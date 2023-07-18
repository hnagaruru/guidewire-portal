package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellSchNonPerilCovItemCovCost.eti;HOPDwellSchNonPerilCovItemCovCost.eix;HOPDwellSchNonPerilCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellSchNonPerilCovItemCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellSchNonPerilCovItemCovCostVersionList {
  public HOPDwellSchNonPerilCovItemCovCostVersionListImpl(entity.HOPDwellSchNonPerilCovItemCovCost base)  {
    super(base);
  }
  
  public HOPDwellSchNonPerilCovItemCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellSchNonPerilCovItemCovCost AsOf(java.util.Date date) {
    return (entity.HOPDwellSchNonPerilCovItemCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellSchNonPerilCovItemCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.HOPTransaction bean) {
    addToArray(entity.HOPDwellSchNonPerilCovItemCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellSchNonPerilCovItemCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.HOPDwellSchNonPerilCovItemCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}