package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeAthleticParticipant.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeAthleticParticipant extends entity.GeneralLiabilityExcl {
  protected ExcludeAthleticParticipant()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeAthleticParticipant(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeAthleticParticipant");
  }
  
  public ExcludeAthleticParticipant(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeAthleticParticipant");
  }
  
  public productmodel.GenericAthleticParticipantDescType getAthleticParticipantDescTerm() {
    return (productmodel.GenericAthleticParticipantDescType)getCovTerm("AthleticParticipantDesc");
  }
  
  public boolean getHasAthleticParticipantDescTerm() {
    return hasCovTerm("AthleticParticipantDesc");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeAthleticParticipantInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeAthleticParticipant>() {
      public productmodel.ExcludeAthleticParticipant newEmptyInstance() {
        return new productmodel.ExcludeAthleticParticipant();
      }
      
      
    });
  }
}