package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCovCost.eti;ContrEquipPartCovCost.eix;ContrEquipPartCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ContrEquipPartCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ContrEquipPartCovCostVersionList {
  public ContrEquipPartCovCostVersionListImpl(entity.ContrEquipPartCovCost base)  {
    super(base);
  }
  
  public ContrEquipPartCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.ContrEquipPartCovCost AsOf(java.util.Date date) {
    return (entity.ContrEquipPartCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContrEquipPartCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.IMTransaction bean) {
    addToArray(entity.ContrEquipPartCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.ContrEquipPartCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}