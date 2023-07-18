package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoCovCost.eti;PersonalAutoCovCost.eix;PersonalAutoCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalAutoCovCostVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalAutoCovCostVersionList {
  public PersonalAutoCovCostVersionListImpl(entity.PersonalAutoCovCost base)  {
    super(base);
  }
  
  public PersonalAutoCovCostVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PersonalAutoCovCost AsOf(java.util.Date date) {
    return (entity.PersonalAutoCovCost)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PATransaction> TransactionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoCovCost.TRANSACTIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToTransactions(entity.PATransaction bean) {
    addToArray(entity.PersonalAutoCovCost.TRANSACTIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoCovCost> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PATransactionVersionList> getTransactions() {
    return (java.util.List)getArray(entity.PersonalAutoCovCost.TRANSACTIONS_PROP.get());
  }
  
  
}