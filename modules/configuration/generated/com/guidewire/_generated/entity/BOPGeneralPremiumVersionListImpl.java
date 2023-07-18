package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPGeneralPremium.eti;BOPGeneralPremium.eix;BOPGeneralPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPGeneralPremiumVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPGeneralPremiumVersionList {
  public BOPGeneralPremiumVersionListImpl(entity.BOPGeneralPremium base)  {
    super(base);
  }
  
  public BOPGeneralPremiumVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPGeneralPremium AsOf(java.util.Date date) {
    return (entity.BOPGeneralPremium)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPGeneralPremium.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BOPTransaction bean) {
    addToArray(entity.BOPGeneralPremium.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPGeneralPremium> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BOPGeneralPremium.TRANSACTIONS_PROP.get());
  }
  
  
}