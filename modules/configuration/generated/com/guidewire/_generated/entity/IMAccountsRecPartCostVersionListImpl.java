package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartCost.eti;IMAccountsRecPartCost.eix;IMAccountsRecPartCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMAccountsRecPartCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMAccountsRecPartCostVersionList {
  public IMAccountsRecPartCostVersionListImpl(entity.IMAccountsRecPartCost base)  {
    super(base);
  }
  
  public IMAccountsRecPartCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMAccountsRecPartCost AsOf(java.util.Date date) {
    return (entity.IMAccountsRecPartCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMAccountsRecPartCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.IMTransaction bean) {
    addToArray(entity.IMAccountsRecPartCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.IMAccountsRecPartCost.TRANSACTIONS_PROP.get());
  }
  
  
}