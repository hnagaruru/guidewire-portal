package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLPollutionShortTermCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLPollutionShortTermCov extends entity.GeneralLiabilityCov {
  protected GLPollutionShortTermCov()  {
    super((java.lang.Void)null);
  }
  
  public GLPollutionShortTermCov(entity.PolicyPeriod branch)  {
    super(branch, "GLPollutionShortTermCov");
  }
  
  public GLPollutionShortTermCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLPollutionShortTermCov");
  }
  
  public boolean getHasNamedPerilsOnlyTerm() {
    return hasCovTerm("NamedPerilsOnly");
  }
  
  public productmodel.GenericNamedPerilsOnlyType getNamedPerilsOnlyTerm() {
    return (productmodel.GenericNamedPerilsOnlyType)getCovTerm("NamedPerilsOnly");
  }
  
  static {
    com.guidewire._generated.productmodel.GLPollutionShortTermCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLPollutionShortTermCov>() {
      public productmodel.GLPollutionShortTermCov newEmptyInstance() {
        return new productmodel.GLPollutionShortTermCov();
      }
      
      
    });
  }
}