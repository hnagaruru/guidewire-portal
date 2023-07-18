package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PACoveragePremium.eti;PACoveragePremium.eix;PACoveragePremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PACoveragePremiumVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PACoveragePremiumVersionList {
  public PACoveragePremiumVersionListImpl(entity.PACoveragePremium base)  {
    super(base);
  }
  
  public PACoveragePremiumVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PACoveragePremium AsOf(java.util.Date date) {
    return (entity.PACoveragePremium)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PACoveragePremium.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.PATransaction bean) {
    addToArray(entity.PACoveragePremium.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PACoveragePremium> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.PACoveragePremium.TRANSACTIONS_PROP.get());
  }
  
  
}