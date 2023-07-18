package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/LimitCovPremiseProject.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class LimitCovPremiseProject extends entity.GeneralLiabilityCond {
  protected LimitCovPremiseProject()  {
    super((java.lang.Void)null);
  }
  
  public LimitCovPremiseProject(entity.PolicyPeriod branch)  {
    super(branch, "LimitCovPremiseProject");
  }
  
  public LimitCovPremiseProject(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "LimitCovPremiseProject");
  }
  
  public productmodel.GenericDesignatePremisesProjectType getDesignatePremisesProjectTerm() {
    return (productmodel.GenericDesignatePremisesProjectType)getCovTerm("DesignatePremisesProject");
  }
  
  public boolean getHasDesignatePremisesProjectTerm() {
    return hasCovTerm("DesignatePremisesProject");
  }
  
  static {
    com.guidewire._generated.productmodel.LimitCovPremiseProjectInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.LimitCovPremiseProject>() {
      public productmodel.LimitCovPremiseProject newEmptyInstance() {
        return new productmodel.LimitCovPremiseProject();
      }
      
      
    });
  }
}