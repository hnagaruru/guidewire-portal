package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCJurisdictionCost.eti;WCJurisdictionCost.eix;WCJurisdictionCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCJurisdictionCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCJurisdictionCostVersionList {
  public WCJurisdictionCostVersionListImpl(entity.WCJurisdictionCost base)  {
    super(base);
  }
  
  public WCJurisdictionCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCJurisdictionCost AsOf(java.util.Date date) {
    return (entity.WCJurisdictionCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.WCJurisdictionCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.WCTransaction bean) {
    addToArray(entity.WCJurisdictionCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCJurisdictionCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.WCJurisdictionCost.TRANSACTIONS_PROP.get());
  }
  
  
}