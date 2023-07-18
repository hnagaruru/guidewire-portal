package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoTaxCost.eti;PersonalAutoTaxCost.eix;PersonalAutoTaxCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalAutoTaxCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalAutoTaxCostVersionList {
  public PersonalAutoTaxCostVersionListImpl(entity.PersonalAutoTaxCost base)  {
    super(base);
  }
  
  public PersonalAutoTaxCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PersonalAutoTaxCost AsOf(java.util.Date date) {
    return (entity.PersonalAutoTaxCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoTaxCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.PATransaction bean) {
    addToArray(entity.PersonalAutoTaxCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoTaxCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.PersonalAutoTaxCost.TRANSACTIONS_PROP.get());
  }
  
  
}