package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPMinPremiumCost.eti;BOPMinPremiumCost.eix;BOPMinPremiumCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPMinPremiumCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPMinPremiumCostVersionList {
  public BOPMinPremiumCostVersionListImpl(entity.BOPMinPremiumCost base)  {
    super(base);
  }
  
  public BOPMinPremiumCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPMinPremiumCost AsOf(java.util.Date date) {
    return (entity.BOPMinPremiumCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPMinPremiumCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BOPTransaction bean) {
    addToArray(entity.BOPMinPremiumCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPMinPremiumCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BOPMinPremiumCost.TRANSACTIONS_PROP.get());
  }
  
  
}