package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPPermittedIncidentalOccupancies.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericHOPPermittedIncidentalOccupanciesInResidenceTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericHOPPermittedIncidentalOccupanciesInResidenceType {
  public GenericHOPPermittedIncidentalOccupanciesInResidenceTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPPermittedIncidentalOccupancies getCoverage() {
    return (productmodel.HOPPermittedIncidentalOccupancies)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPPermittedIncidentalOccupancies getHOPPermittedIncidentalOccupancies() {
    return (productmodel.HOPPermittedIncidentalOccupancies)getClause();
  }
  
  
}