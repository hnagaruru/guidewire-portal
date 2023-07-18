package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPIncLimitPersPropertyAtOtherResidences.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> LocationOfResidenceValueProvider;
  
  public ScheduledItemHOPIncLimitPersPropertyAtOtherResidencesSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    LocationOfResidenceValueProvider  =  getClause().getPropertyInfosMap().get("HOPIncLimitPersPropertyAtOtherResidencesSchedLocation").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPIncLimitPersPropertyAtOtherResidences getClause() {
    return (productmodel.HOPIncLimitPersPropertyAtOtherResidences)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getLocationOfResidence() {
    return LocationOfResidenceValueProvider.getValue();
  }
  
  public void setLocationOfResidence(java.lang.String locationOfResidence) {
    LocationOfResidenceValueProvider.setValue(locationOfResidence);
  }
  
  
}