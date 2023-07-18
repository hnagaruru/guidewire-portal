package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBarberCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectBOPBarberBeautNumTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectBOPBarberBeautNumType {
  public DirectBOPBarberBeautNumTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPBarberCov getBOPBarberCov() {
    return (productmodel.BOPBarberCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPBarberCov getCoverage() {
    return (productmodel.BOPBarberCov)getClause();
  }
  
  
}