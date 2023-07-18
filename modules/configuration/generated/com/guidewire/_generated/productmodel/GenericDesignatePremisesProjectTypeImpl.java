package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/LimitCovPremiseProject.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericDesignatePremisesProjectTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericDesignatePremisesProjectType {
  public GenericDesignatePremisesProjectTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.LimitCovPremiseProject getCondition() {
    return (productmodel.LimitCovPremiseProject)getClause();
  }
  
  @java.lang.Override
  public productmodel.LimitCovPremiseProject getLimitCovPremiseProject() {
    return (productmodel.LimitCovPremiseProject)getClause();
  }
  
  
}