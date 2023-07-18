package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAGeneralPremium.eti;PAGeneralPremium.eix;PAGeneralPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PAGeneralPremiumVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PAGeneralPremiumVersionList {
  public PAGeneralPremiumVersionListImpl(entity.PAGeneralPremium base)  {
    super(base);
  }
  
  public PAGeneralPremiumVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PAGeneralPremium AsOf(java.util.Date date) {
    return (entity.PAGeneralPremium)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PAGeneralPremium.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.PATransaction bean) {
    addToArray(entity.PAGeneralPremium.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAGeneralPremium> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.PAGeneralPremium.TRANSACTIONS_PROP.get());
  }
  
  
}