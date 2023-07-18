package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPLineModifierCost.eti;HOPLineModifierCost.eix;HOPLineModifierCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPLineModifierCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPLineModifierCostVersionList {
  public HOPLineModifierCostVersionListImpl(entity.HOPLineModifierCost base)  {
    super(base);
  }
  
  public HOPLineModifierCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPLineModifierCost AsOf(java.util.Date date) {
    return (entity.HOPLineModifierCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPLineModifierCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.HOPTransaction bean) {
    addToArray(entity.HOPLineModifierCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPLineModifierCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.HOPLineModifierCost.TRANSACTIONS_PROP.get());
  }
  
  
}