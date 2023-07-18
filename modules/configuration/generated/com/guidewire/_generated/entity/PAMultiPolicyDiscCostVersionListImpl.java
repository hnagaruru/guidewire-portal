package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAMultiPolicyDiscCost.eti;PAMultiPolicyDiscCost.eix;PAMultiPolicyDiscCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PAMultiPolicyDiscCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PAMultiPolicyDiscCostVersionList {
  public PAMultiPolicyDiscCostVersionListImpl(entity.PAMultiPolicyDiscCost base)  {
    super(base);
  }
  
  public PAMultiPolicyDiscCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PAMultiPolicyDiscCost AsOf(java.util.Date date) {
    return (entity.PAMultiPolicyDiscCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PAMultiPolicyDiscCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.PATransaction bean) {
    addToArray(entity.PAMultiPolicyDiscCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PAMultiPolicyDiscCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.PAMultiPolicyDiscCost.TRANSACTIONS_PROP.get());
  }
  
  
}