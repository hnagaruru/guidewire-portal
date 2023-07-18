package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellingModifierCost.eti;HOPDwellingModifierCost.eix;HOPDwellingModifierCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingModifierCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingModifierCostVersionList {
  public HOPDwellingModifierCostVersionListImpl(entity.HOPDwellingModifierCost base)  {
    super(base);
  }
  
  public HOPDwellingModifierCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPDwellingModifierCost AsOf(java.util.Date date) {
    return (entity.HOPDwellingModifierCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwellingModifierCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.HOPTransaction bean) {
    addToArray(entity.HOPDwellingModifierCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingModifierCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.HOPDwellingModifierCost.TRANSACTIONS_PROP.get());
  }
  
  
}