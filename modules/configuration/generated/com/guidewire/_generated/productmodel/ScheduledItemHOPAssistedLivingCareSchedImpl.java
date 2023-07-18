package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPAssistedLivingCare.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPAssistedLivingCareSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPAssistedLivingCareSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> FacilityLocationValueProvider;
  
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> FacilityNameValueProvider;
  
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> RelativesNameValueProvider;
  
  public ScheduledItemHOPAssistedLivingCareSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    RelativesNameValueProvider  =  getClause().getPropertyInfosMap().get("HOPAssistedLivingCareSchedRelativesName").createValueProvider(scheduledItemEntity);
    FacilityNameValueProvider  =  getClause().getPropertyInfosMap().get("HOPAssistedLivingCareSchedFacilityName").createValueProvider(scheduledItemEntity);
    FacilityLocationValueProvider  =  getClause().getPropertyInfosMap().get("HOPAssistedLivingCareSchedFacilityLocation").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPAssistedLivingCare getClause() {
    return (productmodel.HOPAssistedLivingCare)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getFacilityLocation() {
    return FacilityLocationValueProvider.getValue();
  }
  
  public java.lang.String getFacilityName() {
    return FacilityNameValueProvider.getValue();
  }
  
  public java.lang.String getRelativesName() {
    return RelativesNameValueProvider.getValue();
  }
  
  public void setFacilityLocation(java.lang.String facilityLocation) {
    FacilityLocationValueProvider.setValue(facilityLocation);
  }
  
  public void setFacilityName(java.lang.String facilityName) {
    FacilityNameValueProvider.setValue(facilityName);
  }
  
  public void setRelativesName(java.lang.String relativesName) {
    RelativesNameValueProvider.setValue(relativesName);
  }
  
  
}