package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPPersonalPropertyCoverageExclusion.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPPersonalPropertyCoverageExclusion extends entity.HOPDwellingExcl {
  protected HOPPersonalPropertyCoverageExclusion()  {
    super((java.lang.Void)null);
  }
  
  public HOPPersonalPropertyCoverageExclusion(entity.PolicyPeriod branch)  {
    super(branch, "ztji6hbcsv8e62ln3pte21ppo0a");
  }
  
  public HOPPersonalPropertyCoverageExclusion(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ztji6hbcsv8e62ln3pte21ppo0a");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPPersonalPropertyCoverageExclusionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPPersonalPropertyCoverageExclusion>() {
      public productmodel.HOPPersonalPropertyCoverageExclusion newEmptyInstance() {
        return new productmodel.HOPPersonalPropertyCoverageExclusion();
      }
      
      
    });
  }
}