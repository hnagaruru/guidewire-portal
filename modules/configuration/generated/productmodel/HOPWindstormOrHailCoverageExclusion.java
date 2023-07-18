package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPWindstormOrHailCoverageExclusion.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPWindstormOrHailCoverageExclusion extends entity.HOPDwellingExcl {
  protected HOPWindstormOrHailCoverageExclusion()  {
    super((java.lang.Void)null);
  }
  
  public HOPWindstormOrHailCoverageExclusion(entity.PolicyPeriod branch)  {
    super(branch, "zt2gg2bpmg9au89d3g8rdfr72a9");
  }
  
  public HOPWindstormOrHailCoverageExclusion(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zt2gg2bpmg9au89d3g8rdfr72a9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPWindstormOrHailCoverageExclusionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPWindstormOrHailCoverageExclusion>() {
      public productmodel.HOPWindstormOrHailCoverageExclusion newEmptyInstance() {
        return new productmodel.HOPWindstormOrHailCoverageExclusion();
      }
      
      
    });
  }
}