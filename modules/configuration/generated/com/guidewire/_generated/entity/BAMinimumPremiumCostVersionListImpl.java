package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAMinimumPremiumCost.eti;BAMinimumPremiumCost.eix;BAMinimumPremiumCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAMinimumPremiumCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAMinimumPremiumCostVersionList {
  public BAMinimumPremiumCostVersionListImpl(entity.BAMinimumPremiumCost base)  {
    super(base);
  }
  
  public BAMinimumPremiumCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAMinimumPremiumCost AsOf(java.util.Date date) {
    return (entity.BAMinimumPremiumCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAMinimumPremiumCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BATransaction bean) {
    addToArray(entity.BAMinimumPremiumCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAMinimumPremiumCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BAMinimumPremiumCost.TRANSACTIONS_PROP.get());
  }
  
  
}