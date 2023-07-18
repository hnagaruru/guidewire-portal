package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCCovEmpCost.eti;WCCovEmpCost.eix;WCCovEmpCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCCovEmpCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCCovEmpCostVersionList {
  public WCCovEmpCostVersionListImpl(entity.WCCovEmpCost base)  {
    super(base);
  }
  
  public WCCovEmpCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCCovEmpCost AsOf(java.util.Date date) {
    return (entity.WCCovEmpCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCCovEmpCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.WCTransaction bean) {
    addToArray(entity.WCCovEmpCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCCovEmpCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.WCCovEmpCost.TRANSACTIONS_PROP.get());
  }
  
  
}