package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCost.eti;ContrEquipPartCost.eix;ContrEquipPartCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ContrEquipPartCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ContrEquipPartCostVersionList {
  public ContrEquipPartCostVersionListImpl(entity.ContrEquipPartCost base)  {
    super(base);
  }
  
  public ContrEquipPartCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.ContrEquipPartCost AsOf(java.util.Date date) {
    return (entity.ContrEquipPartCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContrEquipPartCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.IMTransaction bean) {
    addToArray(entity.ContrEquipPartCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.ContrEquipPartCost.TRANSACTIONS_PROP.get());
  }
  
  
}