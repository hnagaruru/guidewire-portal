package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPPermittedIncidentalOccupancies.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPPermittedIncidentalOccupanciesSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPPermittedIncidentalOccupanciesSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> DescriptionOfStructureValueProvider;
  
  public ScheduledItemHOPPermittedIncidentalOccupanciesSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    DescriptionOfStructureValueProvider  =  getClause().getPropertyInfosMap().get("HOPPermittedIncidentalOccupanciesSchedDescription").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPPermittedIncidentalOccupancies getClause() {
    return (productmodel.HOPPermittedIncidentalOccupancies)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getDescriptionOfStructure() {
    return DescriptionOfStructureValueProvider.getValue();
  }
  
  public void setDescriptionOfStructure(java.lang.String descriptionOfStructure) {
    DescriptionOfStructureValueProvider.setValue(descriptionOfStructure);
  }
  
  
}