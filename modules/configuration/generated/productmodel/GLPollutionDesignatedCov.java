package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLPollutionDesignatedCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLPollutionDesignatedCov extends entity.GeneralLiabilityCov {
  protected GLPollutionDesignatedCov()  {
    super((java.lang.Void)null);
  }
  
  public GLPollutionDesignatedCov(entity.PolicyPeriod branch)  {
    super(branch, "GLPollutionDesignatedCov");
  }
  
  public GLPollutionDesignatedCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLPollutionDesignatedCov");
  }
  
  public productmodel.GenericDesignatedPollutantsType getDesignatedPollutantsTerm() {
    return (productmodel.GenericDesignatedPollutantsType)getCovTerm("DesignatedPollutants");
  }
  
  public boolean getHasDesignatedPollutantsTerm() {
    return hasCovTerm("DesignatedPollutants");
  }
  
  static {
    com.guidewire._generated.productmodel.GLPollutionDesignatedCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLPollutionDesignatedCov>() {
      public productmodel.GLPollutionDesignatedCov newEmptyInstance() {
        return new productmodel.GLPollutionDesignatedCov();
      }
      
      
    });
  }
}