package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAJurisdictionCost.eti;BAJurisdictionCost.eix;BAJurisdictionCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BAJurisdictionCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BAJurisdictionCostVersionList {
  public BAJurisdictionCostVersionListImpl(entity.BAJurisdictionCost base)  {
    super(base);
  }
  
  public BAJurisdictionCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BAJurisdictionCost AsOf(java.util.Date date) {
    return (entity.BAJurisdictionCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BAJurisdictionCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.BATransaction bean) {
    addToArray(entity.BAJurisdictionCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BAJurisdictionCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.BAJurisdictionCost.TRANSACTIONS_PROP.get());
  }
  
  
}