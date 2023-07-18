package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/AggLimitsLocationProject.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class AggLimitsLocationProject extends entity.GeneralLiabilityCond {
  protected AggLimitsLocationProject()  {
    super((java.lang.Void)null);
  }
  
  public AggLimitsLocationProject(entity.PolicyPeriod branch)  {
    super(branch, "AggLimitsLocationProject");
  }
  
  public AggLimitsLocationProject(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "AggLimitsLocationProject");
  }
  
  public productmodel.TypekeyAggLimitApplicabilityType getAggLimitApplicabilityTerm() {
    return (productmodel.TypekeyAggLimitApplicabilityType)getCovTerm("AggLimitApplicability");
  }
  
  public productmodel.GenericAggLimitLocProjectDescriptionType getAggLimitLocProjectDescriptionTerm() {
    return (productmodel.GenericAggLimitLocProjectDescriptionType)getCovTerm("AggLimitLocProjectDescription");
  }
  
  public boolean getHasAggLimitApplicabilityTerm() {
    return hasCovTerm("AggLimitApplicability");
  }
  
  public boolean getHasAggLimitLocProjectDescriptionTerm() {
    return hasCovTerm("AggLimitLocProjectDescription");
  }
  
  static {
    com.guidewire._generated.productmodel.AggLimitsLocationProjectInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.AggLimitsLocationProject>() {
      public productmodel.AggLimitsLocationProject newEmptyInstance() {
        return new productmodel.AggLimitsLocationProject();
      }
      
      
    });
  }
}