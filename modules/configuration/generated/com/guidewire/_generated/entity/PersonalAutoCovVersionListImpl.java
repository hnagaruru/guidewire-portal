package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalAutoCov.eti;PersonalAutoCov.eix;PersonalAutoCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PersonalAutoCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PersonalAutoCovVersionList {
  public PersonalAutoCovVersionListImpl(entity.PersonalAutoCov base)  {
    super(base);
  }
  
  public PersonalAutoCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PersonalAutoCov AsOf(java.util.Date date) {
    return (entity.PersonalAutoCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PersonalAutoCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.PersonalAutoCovCost bean) {
    addToArray(entity.PersonalAutoCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PersonalAutoCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.PersonalAutoCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.PersonalAutoCov.COSTS_PROP.get());
  }
  
  
}