package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBldgAddlInterest.eti;BOPBldgAddlInterest.eix;BOPBldgAddlInterest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPBldgAddlInterestVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPBldgAddlInterestVersionList {
  public BOPBldgAddlInterestVersionListImpl(entity.BOPBldgAddlInterest base)  {
    super(base);
  }
  
  public BOPBldgAddlInterestVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPBldgAddlInterest AsOf(java.util.Date date) {
    return (entity.BOPBldgAddlInterest)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPBldgAddlInterest> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}