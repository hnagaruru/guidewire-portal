package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLaborClient.eti;PolicyLaborClient.eix;PolicyLaborClient.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyLaborClientVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyLaborClientVersionList {
  public PolicyLaborClientVersionListImpl(entity.PolicyLaborClient base)  {
    super(base);
  }
  
  public PolicyLaborClientVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyLaborClient AsOf(java.util.Date date) {
    return (entity.PolicyLaborClient)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCLaborContactDetail> DetailsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyLaborClient.DETAILS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToDetails(entity.WCLaborContactDetail bean) {
    addToArray(entity.PolicyLaborClient.DETAILS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLaborClient> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCLaborContactDetailVersionList> getDetails() {
    return (java.util.List)getArray(entity.PolicyLaborClient.DETAILS_PROP.get());
  }
  
  
}