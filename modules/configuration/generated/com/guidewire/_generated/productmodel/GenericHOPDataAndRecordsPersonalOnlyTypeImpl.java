package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPDataAndRecords.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericHOPDataAndRecordsPersonalOnlyTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericHOPDataAndRecordsPersonalOnlyType {
  public GenericHOPDataAndRecordsPersonalOnlyTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPDataAndRecords getCoverage() {
    return (productmodel.HOPDataAndRecords)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPDataAndRecords getHOPDataAndRecords() {
    return (productmodel.HOPDataAndRecords)getClause();
  }
  
  
}