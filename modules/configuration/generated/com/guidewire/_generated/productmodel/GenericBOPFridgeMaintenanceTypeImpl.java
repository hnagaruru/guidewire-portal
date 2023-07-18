package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPSpoilageCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBOPFridgeMaintenanceTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBOPFridgeMaintenanceType {
  public GenericBOPFridgeMaintenanceTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPSpoilageCov getBOPSpoilageCov() {
    return (productmodel.BOPSpoilageCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPSpoilageCov getCoverage() {
    return (productmodel.BOPSpoilageCov)getClause();
  }
  
  
}