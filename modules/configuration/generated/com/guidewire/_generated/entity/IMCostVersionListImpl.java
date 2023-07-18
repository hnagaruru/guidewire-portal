package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMCost.eti;IMCost.eix;IMCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMCostVersionList {
  public IMCostVersionListImpl(entity.IMCost base)  {
    super(base);
  }
  
  public IMCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMCost AsOf(java.util.Date date) {
    return (entity.IMCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.IMTransaction bean) {
    addToArray(entity.IMCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.IMCost.TRANSACTIONS_PROP.get());
  }
  
  
}