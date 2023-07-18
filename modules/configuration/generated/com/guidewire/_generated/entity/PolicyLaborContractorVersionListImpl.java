package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLaborContractor.eti;PolicyLaborContractor.eix;PolicyLaborContractor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PolicyLaborContractorVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PolicyLaborContractorVersionList {
  public PolicyLaborContractorVersionListImpl(entity.PolicyLaborContractor base)  {
    super(base);
  }
  
  public PolicyLaborContractorVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PolicyLaborContractor AsOf(java.util.Date date) {
    return (entity.PolicyLaborContractor)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCLaborContactDetail> DetailsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.PolicyLaborContractor.DETAILS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToDetails(entity.WCLaborContactDetail bean) {
    addToArray(entity.PolicyLaborContractor.DETAILS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PolicyLaborContractor> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.WCLaborContactDetailVersionList> getDetails() {
    return (java.util.List)getArray(entity.PolicyLaborContractor.DETAILS_PROP.get());
  }
  
  
}